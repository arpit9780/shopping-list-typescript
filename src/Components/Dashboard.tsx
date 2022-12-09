import React from "react";
import { useForm } from "react-hook-form";

export const Dashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("section")}>
        <option value="fruits & vegetables">Fruits & Vegetables</option>
        <option value="meet & seafood">Meet & Seafood</option>
        <option value="dairy">Dairy</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="bread & pasta">Bread & Pasta</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
        <option value="cleaning">Cleaning</option>
        <option value="other">Other</option>
      </select>
      <input
        placeholder="Quantity"
        {...register("quantity", { required: true })}
      />
      {errors.quantity && <span>This field is required</span>}
      <input placeholder="Name" {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
