
import "./CampoTexto.css";

const CampoTexto = (props) => {
  
  /* props é a propriedade */

  const placeholderModificada = `${props.placeholder}`;

  const aoDigitado = (evento) => {

    props.aoAlterado(evento.target.value)

  };

  return (

    <div className="campo-texto">

      <label>
        
        {props.label}
        
        </label>

      <input

        value={props.valor}
        onChange={aoDigitado} /* CADA LETRA DIGITADA EXECULTA A FUNÇÃO AO DIGITADO */
        required={props.obrigatorio}
        placeholder={placeholderModificada}
        
      />

    </div>
  ); 
};

export default CampoTexto;
