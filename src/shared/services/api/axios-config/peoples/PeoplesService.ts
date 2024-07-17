import { Environment } from "../../../../environment/indes.ts";
import { Api } from "../index.ts";

export interface IListPeople {
  id: number;
  fullname: string;
  email: string;
  cityId: number;
}

export interface IDetailPeople {
  id: number;
  fullName: string;
  email: string;
  cityId: number;
}

type TcountPeople = {
  data: IListPeople[];
  count: number;
};

const getAll = async (page = 1, filter = ""): Promise<TcountPeople | Error> => {
  
  try {
    const filterQuery = encodeURIComponent(filter)
    const urlRelativa = `/peoples?_page=${page}&fullname_LIKE=${filterQuery}`;
    
    const { data, headers } = await Api.get(urlRelativa);   
    console.log(headers);
    
    
    if (data) {
      return {
        data,
        count: Number(headers["x-total-count"] || Environment.LIMITE_DE_LINHAS),
      };
    }
    return new Error("Erro ao listar os registros.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros."
    );
  }
};

const getById = async (id: number): Promise<IDetailPeople | Error> => {
  try {
    const { data } = await Api.get(`/peoples/${id}`);

    if (data) {
      return data;
    }
    return new Error("Erro ao consultar o registro.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o registro."
    );
  }
};

const create = async (
  dados: Omit<IDetailPeople, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetailPeople>("/peoples", dados);

    if (data) {
      return data.id;
    }
    return new Error("Erro ao cadastrar o registro.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao cadastrar o registro."
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetailPeople
): Promise<void | Error> => {
  try {
    await Api.put(`/peoples${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro."
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/peoples${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao deletar o registro."
    );
  }
};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
