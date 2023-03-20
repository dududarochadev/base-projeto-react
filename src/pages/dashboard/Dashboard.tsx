import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const Dashboard = () => {

  return (
    <LayoutBase
      titulo='Página inicial'
      barraDeFerramentas={<FerramentasDaListagem mostrarTextoDaBusca />}
    >
      Testeeee
    </LayoutBase>
  );
};