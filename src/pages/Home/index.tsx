import { 
  Container, 
  FormContainer, 
  RepositoriesContainer, 
  SearchButton, 
  InputSearch, 
  SelectInput
} from './styled';
import api from '../../api/api'
import { FormEvent, useEffect, useState } from 'react';
import {Repository} from './Components/Repository';
import { MagnifyingGlass } from 'phosphor-react'


type Repository = {
  full_name: string;
  name: string;
  id: number;
  language: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  archived: boolean;

}

export function Home() {

  const [repositories, SetRepositories] = useState<Repository[]>([]);
  const [repositoriesArchived, setRepositoriesArquived] = useState<Repository[]>([]);
  const [urlParams, setUrlParams] = useState<string | null>(null);
  const [showOnlyRepositoriesArchived, setShowOnlyRepositoriesArchived] = useState<boolean>(false);
  const [wordKey, setWordKey] = useState<string>('');
  
  const order_alphabetic = "full_name";
  const last_commit = "updated";

  async function loadRepositories(params = '') {
    const response = await api.get(`/repos${params}`);
    
    const repos = response.data as Repository[];

    const repositoriesArchived = repos.filter(repo => repo.archived);

    if (wordKey !== '' && wordKey !== null) {
      
      // cria uma expressão regular
      // /palavara/g1
      const reg = new RegExp(`${wordKey}`, 'gi');
      
      const filter = repos.filter(repo => {
        const result = repo.name.search(reg)

        if(result > -1) {
          return repo;
        }

      });

      SetRepositories(filter);
    }
    else{
      SetRepositories(repos);
    }
    
    setRepositoriesArquived(repositoriesArchived);

  }

  async function handleSearchRepositories(event: FormEvent){
    event.preventDefault();

    if(urlParams !== null && urlParams !== ''){
      await loadRepositories(`?sort=${urlParams}`);
    }
    else{
      await loadRepositories();
    }
  }

  function handleAddUrlParam(param: string) {
    setUrlParams(param);
  }

  function handleToggleArchived() {
    setShowOnlyRepositoriesArchived(!showOnlyRepositoriesArchived);
  }

  function handleWordKey(text: string) {
    setWordKey(() => text);
  }

  useEffect(() => {
    // loadRepositories();
  });

  return (
    <Container>
      <h1>GitHub Tales Eduardo</h1>
      <h2>Explore meus repositórios no Github</h2>

      <FormContainer onSubmit={handleSearchRepositories}>
        <InputSearch 
          type="text" 
          placeholder='Pesquiser por uma palavra'
          maxLength={32}
          value={wordKey}
          onChange={e => handleWordKey(e.target.value)} 
        /> 

        <label htmlFor="archived">
          <input type="checkbox" id="archived" onChange={handleToggleArchived}/>
          <span>Mostrar somente arquivados</span>
        </label>
        
        <div>
          <span>
            Ordenar por:
          </span>

          <SelectInput onChange={e => handleAddUrlParam(e.target.value)}>
            <option value={''} selected>Escolha</option>
            <option value={order_alphabetic}>Ordem Alfabetifca</option>
            <option value={last_commit}>Último commit</option>
          </SelectInput>
        </div>

        <SearchButton type='submit'>
          Buscar
          <MagnifyingGlass size={20} />
        </SearchButton>
        
      </FormContainer>

      <RepositoriesContainer>

        {
          showOnlyRepositoriesArchived ? (
            repositoriesArchived.map(repository => {
              return (
                <Repository
                  key={repository.id}
                  created_at={repository.created_at}
                  full_name={repository.full_name}
                  language={repository.language}
                  name={repository.name}
                  updated_at={repository.updated_at}
                  url={repository.html_url}
                />
              )
            })
            
          ) : (
            repositories.map(repository => {
              return (
                <Repository
                  key={repository.id}
                  created_at={repository.created_at}
                  full_name={repository.full_name}
                  language={repository.language}
                  name={repository.name}
                  updated_at={repository.updated_at}
                  url={repository.html_url}
                />
              )
            })
          )
          
        }
      </RepositoriesContainer>
    </Container>
  )
}