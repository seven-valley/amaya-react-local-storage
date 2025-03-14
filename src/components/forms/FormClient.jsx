import { useForm } from "react-hook-form";
import { useEffect } from 'react';
export default function FormClient(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: {
 company:props.client.company,
 name:props.client.name,
 shortName:props.client.shortName,
 tel:props.client.tel,
 email:props.client.email,
 address1:props.client.address1,
 address2:props.client.address2,
 country:props.client.country,

  }});
  const valider = (data) => {
    props.traiter(data);
  };

  return (
    <>
      <div className="col-4">
        <form onSubmit={handleSubmit(valider)}>
          <span className="text-danger">
            {errors.company && <p role="alert">{errors.company.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("company", {
                required: "Saisir une entreprise",
              })}
              className="form-control"
              id="company"
            />
            <label htmlFor="company">Nom de l'entreprise</label>
          </div>

          <span className="text-danger">
            {errors.name && <p role="alert">{errors.name.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("name", {
                required: "Saisir un contact",
              })}
              className="form-control"
              id="contact"
            />
            <label htmlFor="contact">Nom du Contact</label>
          </div>

          <span className="text-danger">
            {errors.shortName && <p role="alert">{errors.shortName.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("shortName", {
                required: "Saisir un nom d'entreprise",
              })}
              className="form-control"
              id="shortName"
            />
            <label htmlFor="shortName">Nom de l'entreprise raccourci</label>
          </div>

          <span className="text-danger">
            {errors.tel && <p role="alert">{errors.tel.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("tel", {
                required: "Saisir un téléphone",
              })}
              className="form-control"
              id="tel"
            />
            <label htmlFor="tel">Téléphone</label>
          </div>

          <span className="text-danger">
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              type="email"
              {...register("email", {
                required: "Saisir un email",
              })}
              className="form-control"
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <span className="text-danger">
            {errors.address1 && <p role="alert">{errors.address1.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("address1", {
                required: "Saisir une adresse",
              })}
              className="form-control"
              id="address1"
            />
            <label htmlFor="address1">Adresse 1</label>
          </div>

          <span className="text-danger">
            {errors.address2 && <p role="alert">{errors.address2.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("address2", {
                required: "Saisir une adresse",
              })}
              className="form-control"
              id="address2"
            />
            <label htmlFor="address2">Adresse 2</label>
          </div>

          <span className="text-danger">
            {errors.country && <p role="alert">{errors.country.message}</p>}
          </span>
          <div className="form-floating mb-3">
            <input
              {...register("country", {
                required: "Saisir un pays",
              })}
              className="form-control"
              id="country"
            />
            <label htmlFor="country">Pays</label>
          </div>

          

          <button type="submit" className="btn btn-success mb-4">
            Valider
          </button>
        </form>
      </div>
    </>
  );
}
