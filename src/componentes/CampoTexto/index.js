import "./CampoTexto.css";

const CampoTexto = (props) => {
  /* props é a propriedade*/

  const placeholderModificada = `${props.placeholder}`;

  let valor = ''

  const aoDigitado = (evento) => {
    valor =
      evento.target.value; /*Pega o valor que está sendo digitado. O target é um evento do JavaScript*/
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado} /*CADA LETRA DIGITADA EXECULTA A FUNÇÃ0 AO DIGITADO*/
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
