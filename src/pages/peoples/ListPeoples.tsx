import { useSearchParams } from "react-router-dom";
import ListingTools from "../../shared/components/listingTools/ListingTools";
import TemplateDefault from "../../shared/layouts/TemplateDefault";
import { useEffect, useMemo } from "react";
import { PeopleService } from "../../shared/services/api/axios-config/peoples/PeoplesService";

export const ListPeoples: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  useEffect(() => {
    PeopleService.getAll(1, search)
    .then((result) => {
      if (result instanceof Error) {
        alert(result.message)
      } else {
        console.log(result);
      }      
    })
  },[search])

  return (
    <TemplateDefault
      title="List Peoples"
      navbar={
        <ListingTools
          visible
          text={search}
          changeText={(text) => setSearchParams({ search: text }, {replace: true})}
        />
      }
    >
        Oi
    </TemplateDefault>
  );
};
