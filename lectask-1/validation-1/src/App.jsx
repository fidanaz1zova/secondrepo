import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productFormSchema } from "./schema/productForm";
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios("http://localhost:3000/users");
    setUsers(res?.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  const createItem = async (values) => {
    await axios.post("http://localhost:3000/users", values);
  };

  return (
    <div className="validation">
    <form onSubmit={handleSubmit(createItem)}>
      <input type="text" {...register("name")} placeholder="name" />
      {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      )}
 
      <input
        type="text"
        {...register("password")}
        placeholder="password"
      />
      {errors.password?.message && (
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      )}

      {/* <input type="text" {...register("unitPrice")} placeholder="unitPrice" />
      {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.unitPrice?.message}</p>
      )}
      

      <input
        type="text"
        {...register("unitsOnOrder")}
        placeholder="unitsOnOrder"
      />
      {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.unitsOnOrder?.message}</p>
      )}
     

      <select name="" id="">
        {suppliers?.map((s) => (
          <option key={s.id} {...register("supplierId")} value={s.id}>
            {s?.contactTitle}
          </option>
        ))}
      </select> */}

      {/* {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.supplierId?.message}</p>
      )} */}
  
      <button onClick={
        console.log("lol")
      }
       type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;
