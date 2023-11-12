import { Sequelize } from "sequelize";
import database from "../Config/database.js";
//LoginRepo, LogoutRepo, ListarEmpleadosRepo, ListarEmpleadosRepo, EditarEmpleadoRepo, GetPuestosRepo, GetDepartamentosRepo, GetIdentificacionesRepo, InsertarEmpleadoRepo, ImpersonarRepo, EliminarEmpleadoRepo, PlanillaSemanalRepo, PlanillaMensualRepo, DejarImpersonarRepo
export const LoginRepo = async (Username, Password) => {
   try {
      const stringSende='EXEC Login @Username=?, @Password=?';
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
      const stringSende='EXEC Logout @NameSearch_In=?'

      const result = await database.query(
      (stringSende),
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
      const stringSende='EXEC ListarEmpleados @Username=? ,@Filter=?';
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
      const stringSende='EXEC EditarEmpleadoo  @Username=?, @idObjective=?, @NombreNuevo=?, @TipoIdNuevo=?, @ValorID=?, @FechaNacimiento=?, @IdPuesto=?, @IdDepartamento=?';
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
      const result = await database.query('EXEC GetPuestos', {
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
      const result = await database.query('EXEC GetDepartamentos', {
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
      const result = await database.query('EXEC Identificaciones', {
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
      const stringSende='EXEC InsertarEmpleado @Username=?, @Nombre=?, @TipoID=?, @FechaNacimiento=?, @IdPuesto=?, @IdDepartamento=?';
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
      const stringSende='EXEC Impersonar  @Userame_In=?, @idObjective==?';
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

export const EliminarEmpleadoRepo = async (Usuario,IDEmpleadoAEliminar) => {
   try {
      const stringSende='EXEC EliminarEmpleado @Username=?, @idObjective=?';
      const result = await database.query(
         stringSende,
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
      const stringSende='EXEC ConsultarPlanillaSemanal  @Username=?';
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
      const stringSende='EXEC ConsultarPlanillaMensual @Username=?';
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
      const stringSende='EXEC DejarImpersonar  @Userame_In=?, @idObjective==?';
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