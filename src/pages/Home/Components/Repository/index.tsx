import { RepositoryContainer } from "./styles";
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'


type RepositoryProps = {
  full_name: string;
  name: string;
  language: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export function Repository ( props : RepositoryProps) {

  const {created_at, full_name, language, name, updated_at , url} = props;

  function formatDate(date: Date) {
    return format(new Date(date), "dd 'de' MMMM yyyy", {
      locale: ptBr
    })
  }

  return (
    <RepositoryContainer>
        <p>{`Nome: ${name}`}</p>
        <p>{`Nome completo: ${full_name}`}</p>
        <p>{`Criado em: ${formatDate(created_at)}`}</p>
        <p>{`Ultima atualização: ${formatDate(updated_at)}`}</p>
        <p>{`Linguagem: ${language}`}</p>
        <a href={url}>Ir para o repositírio</a>
    </RepositoryContainer>
  )
}