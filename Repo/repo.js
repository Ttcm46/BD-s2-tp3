import { Sequelize } from "sequelize";
import database from "../Config/database.js";
//LoginRepo, LogoutRepo, ListarEmpleadosRepo, ListarEmpleadosRepo, EditarEmpleadoRepo, GetPuestosRepo, GetDepartamentosRepo, GetIdentificacionesRepo, InsertarEmpleadoRepo, ImpersonarRepo, EliminarEmpleadoRepo, PlanillaSemanalRepo, PlanillaMensualRepo, DejarImpersonarRepo
export const LoginRepo = async (Username, Password) => {
   try {
      var stringSende='EXEC Login @Username= 1, @Password= 2';
      //console.log(stringSende.replace("1",Username))
      stringSende=stringSende.replace("1",Username)
      //console.log(stringSende.replace("2",Password))
      stringSende=stringSende.replace("2",Password)
      //console.log(stringSende)
      const result = await database.query(
         stringSende,
        {
          //replacements: {Username, Password},
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
      var stringSende='EXEC Logout '
      stringSende=stringSende.replace("1",Usuario)
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
      var stringSende='EXEC ListarEmpleados @Username= 1 ,@Filter= 2';
      stringSende=stringSende.replace("1",Usuario)
      stringSende=stringSende.replace("2",Filtro)
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
      var stringSende='EXEC EditarEmpleado  @Username= 1, @idObjective= 2, @NombreNuevo= 3, @TipoIdNuevo= 4 , @ValorID= 5 , @FechaNacimiento= 6, @IdPuesto=7, @IdDepartamento=8';
      stringSende=stringSende.replace("1",Usuario)
      stringSende=stringSende.replace("2",idObjecive)
      stringSende=stringSende.replace("3",NombreNuevo)
      stringSende=stringSende.replace("4",TipoIdNuevo)
      stringSende=stringSende.replace("5",ValorID)
      stringSende=stringSende.replace("6",FechaNacimiento)
      stringSende=stringSende.replace("7",IdPuesto)
      stringSende=stringSende.replace("8",IdDepartamento)
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
      const result = await database.query('EXEC GetIdentificaciones', {
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
      console.log(Usuario)
      var stringSende='EXEC InsertarEmpleado @Username=!, @Nombre=#, @TipoID=$, @ValorID= %,@FechaNacimiento=^, @IdPuesto=&, @IdDepartamento=*';
      stringSende=stringSende.replace("!",Usuario)
      stringSende=stringSende.replace("#",Nombre)
      stringSende=stringSende.replace("$",TipoId)
      stringSende=stringSende.replace("%",ValorID)
      stringSende=stringSende.replace("^",FechaNacimiento)
      stringSende=stringSende.replace("&",IdPuesto)
      stringSende=stringSende.replace("*",IdDepartamento)
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
      var stringSende='EXEC Impersonar  @Username=1, @idObjective=2';
      stringSende=stringSende.replace("1",Usuario)
      stringSende=stringSende.replace("2",IDObjetivo)
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
      var stringSende='EXEC EliminarEmpleado @Username=1, @idObjective=2';
      stringSende=stringSende.replace("1",Usuario)
      stringSende=stringSende.replace("2",IDEmpleadoAEliminar)
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
      var stringSende='EXEC ConsultarPlanillaSemanal  @Username=1';
      stringSende=stringSende.replace("1",Usuario)
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto eliminado exitosamente');
      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
export const PlanillaMensualRepo = async (Usuario) => {

   try {
      var stringSende='EXEC ConsultarPlanillaMensual @Username=1';
      stringSende=stringSende.replace("1",Usuario)
      const result = await database.query(
         stringSende,
        {
          replacements: {Usuario},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Producto eliminado exitosamente');
      return result;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
export const DejarImpersonarRepo = async (Usuario,
   IdUsuarioEmpersonado) => {

   try {
      var stringSende='EXEC DejarImpersonar  @Username=1, @idObjective=2';
      stringSende=stringSende.replace("1",Usuario)
      stringSende=stringSende.replace("2",IdUsuarioEmpersonado)
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
      var stringSende='EXEC insertArticulo "codigo=:codigo, @nombre=:name, @precio=:price';
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