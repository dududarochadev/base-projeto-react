import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarTextoDaBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarBotaoNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarTextoDaBusca = false,
  aoMudarTextoDaBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarBotaoNovo
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      component={Paper}
      height={theme.spacing(5)}
    >
      {mostrarTextoDaBusca && <TextField
        size='small'
        value={textoDaBusca}
        onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
        placeholder='Pesquisar...'
      />}

      <Box flex={1} display='flex' justifyContent='end'>
        {mostrarBotaoNovo &&
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarBotaoNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>}
      </Box>
    </Box>
  );
};