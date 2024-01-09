import Button from 'react-bootstrap/Button';

const Jumbotron = () => {
    return (
        <div className="text-center my-5">
            <h1>Libreria "Narra, ti va?"</h1>
            <p>
               Tanti libri tra cui cercare
            </p>
            <hr />
            <p>
                Scegli il tuo e inizia la lettura.
            </p>
            <Button variant="success">Leggi di più</Button>
        </div>
    )
}

export default Jumbotron