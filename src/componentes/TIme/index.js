import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    return(

        (props.colaboradores.length > 0) ? /* AQUI É UMA ESPÉCIE DE IF ELSE (SE (ORDEM) FOR MAIOR QUE 0 RETORNE ISSO */
       
       <section className='time' style={{backgroundColor: props.corSecundaria}}>
            
            
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>

           <div className='colaboradores'>
            
            {props.colaboradores.map(colaborador => 
            
            <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}
            />)}

            </div> 
        </section>

        :'' /* SE NÃO RETORNE UMA STRING VAZIA */
    )
    
}

export default Time;