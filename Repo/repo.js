import { Sequelize } from "sequelize";
import database from "../Config/database.js";
//DONE:
export const GetArticulosByCantidadRepo = async (amount) => {
   try {
      const stringSende='EXEC GetAllArticulosByCantidad  @QuantitySearch=:amount';
      const result = await database.query(
         stringSende,
        {
          replacements: {amount},
          type: Sequelize.QueryTypes.RAW
        }
      );
      return result[0];
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
//DONE:
export const GetArticulosByNameRepo = async (name) => {
   try {
      const stringSende='EXEC GetAllArticulosByName ';
      const param='@NameSearch_In=:name'
      if(name==undefined | name ==''){
         name="-1"
      }

      const result = await database.query(
      (stringSende+param),
        {
          replacements: {name},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully');
      return result[0];
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
//DONE:
export const GetArticulosByCodeRepo = async (code) => {
   try {
      const stringSende='EXEC GetArticulosByCode  @codigo_in=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {code},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully',result);

      return result[0];
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}

export const GetArticulosByClassRepo = async (code) => {
   try {
      const stringSende='EXEC GetAllArticulosByClass  @Article_Class=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {code},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Retrieved succesfully');
      return result[0];
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
//DONE:
export const GetClasesRepo = async () => {
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
//DONE:
export const InsertArticuloRepo = async (name,price,code,clase) => {
   try {
      const stringSende='EXEC InsertArticulo  @nombre_in=:name,@precio_in=:price,@codigo_in=:code,@Clase_Articulo_in=:clase';
      const result = await database.query(
         stringSende.replace("N'","'"),
        {
          replacements: {name,price,code,clase},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Succesfully inserted');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
//DONE:
export const InsertClaseRepo = async (Class_name) => {
   console.log(Class_name);
   try {
      const stringSende='EXEC InsertClase  @ClassName_In=:Class_name';
      const result = await database.query(
         stringSende,
        {
          replacements: {Class_name},
          type: Sequelize.QueryTypes.RAW
        }
      );
      console.log('Clase insertada exitosamente');
      return true;
  
   } catch (error) {
      console.log(error);
      console.error('Error al llamar al stored procedure');
      return false;
   }
}
//DONE:
export const InsertUsuarioRepo = async (UserName,Password) => {
   try {
      const stringSende='EXEC InsertUsuario  @UserName_In=:UserName, @UserPass_In=:Password';
      const result = await database.query(
         stringSende,
        {
          replacements: {UserName,Password},
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
//DONE:
export const LoginCheckRepo = async (UserName,Password) => {
   try {
      const stringSende='EXEC LoginCheck  @UserName_In=:UserName, @UserPass_In=:Password';
      const result = await database.query(
         stringSende,
        {
          replacements: {UserName,Password},
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

export const UpdateArticuloRepo = async (target,name,price,code,clase) => {
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
          replacements: {target,name,price,code,clase},
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
//DONE:
export const BorrarArticuloRepo = async (code) => {
   console.log(code);
   try {
      const stringSende='EXEC BorrarArticulo  @Target=:code';
      const result = await database.query(
         stringSende,
        {
          replacements: {code},
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