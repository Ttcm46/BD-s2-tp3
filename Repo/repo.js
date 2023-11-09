import { Sequelize } from "sequelize";
import database from "../Config/database.js";
//LoginRepo, LogoutRepo, ListarEmpleadosRepo, ListarEmpleadosRepo, EditarEmpleadoRepo, GetPuestosRepo, GetDepartamentosRepo, GetIdentificacionesRepo, InsertarEmpleadoRepo, ImpersonarRepo, EliminarEmpleadoRepo, PlanillaSemanalRepo, PlanillaMensualRepo, DejarImpersonarRepo
export const LoginRepo = async (Username, Password) => {
   try {
      const stringSende='EXEC GetAllArticulosByCantidad  @QuantitySearch=:amount';
      const result = await database.query(
         stringSende,
        {
          replacements: {Username, Password},
          type: Sequelize.QueryTypes.RAW
        }
      );
      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const LogoutRepo = async (Usuario) => {
   try {
      const stringSende='EXEC GetAllArticulosByName ';
      const param='@NameSearch_In=:name'

      const result = await database.query(
      (stringSende+param),
        {
          replacements: {Usuario},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully');
      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const ListarEmpleadosRepo = async (Usuario,Filtro) => {
   try {
      const stringSende='EXEC GetArticulosByCode  @codigo_in=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario,Filtro},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully',result);

      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const EditarEmpleadoRepo = async (Usuario,
   idObjecive,NombreNuevo,
   TipoIdNuevo, ValorID, FechaNacimiento, IdPuesto,
   IdDepartamento) => {
   try {
      const stringSende='EXEC GetAllArticulosByClass  @Article_Class=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario,
            idObjecive,NombreNuevo,
            TipoIdNuevo, ValorID, FechaNacimiento, IdPuesto,
            IdDepartamento},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully');
      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const GetPuestosRepo = async () => {
   try {
      // Llama al stored procedure utilizando Sequelize
      const result = await database.query('EXEC GetClases', {
        type: Sequelize.QueryTypes.RAW
      });
      //en maq windows, esta mandando un array de 2 elems:[0] respuesta de server sql con forma de tabla, basicamente es una matriz,[1]elementos de
      return result
  
   } catch (error) {
      console.error('Error al llamar al stored procedure:', error);
      return false

   }
}

export const GetDepartamentosRepo = async () => {
   try {
      // Llama al stored procedure utilizando Sequelize
      const result = await database.query('EXEC GetClases', {
        type: Sequelize.QueryTypes.RAW
      });
      //en maq windows, esta mandando un array de 2 elems:[0] respuesta de server sql con forma de tabla, basicamente es una matriz,[1]elementos de
      return result
  
   } catch (error) {
      console.error('Error al llamar al stored procedure:', error);
      return false

   }
}

export const GetIdentificacionesRepo = async () => {
   try {
      // Llama al stored procedure utilizando Sequelize
      const result = await database.query('EXEC GetClases', {
        type: Sequelize.QueryTypes.RAW
      });
      //en maq windows, esta mandando un array de 2 elems:[0] respuesta de server sql con forma de tabla, basicamente es una matriz,[1]elementos de
      return result
  
   } catch (error) {
      console.error('Error al llamar al stored procedure:', error);
      return false

   }
}

export const InsertarEmpleadoRepo = async (Usuario, Nombre, TipoId,
   ValorID, FechaNacimiento,
   IdPuesto, IdDepartamento) => {
   try {
      const stringSende='EXEC InsertUsuario  @UserName_In=:UserName, @UserPass_In=:Password';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario, Nombre, TipoId,
            ValorID, FechaNacimiento,
            IdPuesto, IdDepartamento},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Usuario insertado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const ImpersonarRepo = async (Usuario, IDObjetivo) => {
   try {
      const stringSende='EXEC LoginCheck  @UserName_In=:UserName, @UserPass_In=:Password';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario, IDObjetivo},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Login Exitoso');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const EliminarEmpleadoRepo = async (Usuario,
   IDEmpleadoAEliminar) => {
   try {
      console.log("HERE: ",target)
      const stringSende='EXEC UpdateArticulo  ';
      const stringParamsA='@Target=:'
      const stringParamsB='target,@nombre_in=:'
      const stringParamsC='name,@precio_in=:'
      const stringParamsD='price,@codigo_in=:'
      const stringParamsE='code,@Clase_Articulo_in=:clase'
      const result = await database.query(
         stringSende+stringParamsA+stringParamsB+stringParamsC+stringParamsD+stringParamsE,
        {
          replacements: {Usuario,
            IDEmpleadoAEliminar},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto actualizado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const PlanillaSemanalRepo = async (Usuario) => {
   try {
      const stringSende='EXEC BorrarArticulo  @Target=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto eliminado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
export const PlanillaMensualRepo = async (Usuario) => {

   try {
      const stringSende='EXEC BorrarArticulo  @Target=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto eliminado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
export const DejarImpersonarRepo = async (Usuario,
   IdUsuarioEmpersonado) => {

   try {
      const stringSende='EXEC BorrarArticulo  @Target=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario,
            IdUsuarioEmpersonado},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto eliminado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
/*
export const insertArticuloRepo = async (codigo, name, price) => {
   console.log(codigo,name,price);
   try {
      const stringSende='EXEC insertArticulo "codigo=:codigo, @nombre=:name, @precio=:price';
      const result = await database.query(
         stringSende,
        {
          replacements: {codigo, name, price },
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto insertado exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
*/