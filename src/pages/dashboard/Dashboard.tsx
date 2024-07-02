import DetailTools from "../../shared/components/detailTools/DetailTools";
import TemplateDefault from "../../shared/layouts/TemplateDefault";

export const Dashboard = () => {
    return ( 
        <TemplateDefault 
        title='Home Page' 
        navbar={ <DetailTools showButtonSaveAndBack  /> }>
           Testando...
        </TemplateDefault>
     );
}
 
