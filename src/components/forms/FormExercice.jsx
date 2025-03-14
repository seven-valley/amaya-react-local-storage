import { useForm } from "react-hook-form";
import { useEffect } from 'react';

export default function FormExercice(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:props.exercice.name,
      num:props.exercice.num,
      year:props.exercice.year,
      fav:props.exercice.fav,
  }});
  const valider = (data) => {
    props.traiter(data);
  };

  return (
    <>
      <div className="col-4">
        <form onSubmit={handleSubmit(valider)}>
          <span className="text-danger">
            {errors.name && <p role="alert">{errors.name.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("name", {
                required: "Saisir un Descriptif",
              })}
              className="form-control"
              id="name"
            />
            <label htmlFor="name">Descriptif</label>
          </div>

          <span className="text-danger">
            {errors.num && <p role="alert">{errors.num.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("num", {
                required: "Saisir le numéro",
              })}
              className="form-control"
              id="num"
            />
            <label htmlFor="num">Numéro</label>
          </div>

          <span className="text-danger">
            {errors.year && <p role="alert">{errors.year.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("year", {
                required: "Saisir un téléphone",
              })}
              className="form-control"
              id="year"
            />
            <label htmlFor="year">Année</label>
          </div>

          <span className="text-danger">
            {errors.fav && <p role="alert">{errors.fav.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
             
              {...register("fav", {
                required: "Saisir 1",
              })}
              className="form-control"
              id="fav"
            />
            <label htmlFor="fav">Favori</label>
          </div>
          <button type="submit" className="btn btn-success mb-4">
            Valider
          </button>
        </form>
      </div>
    </>
  );
}
