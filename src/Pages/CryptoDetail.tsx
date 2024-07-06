import { useParams } from "react-router-dom";

const CryptoDetail = () => {
    const { cryptosymbol, id } = useParams();
    return (
        <>
            <div>CryptoDetail</div>
            <p>Symbol: {cryptosymbol}</p>
            <p>Id: {id}</p>
        </>
    );
};

export default CryptoDetail;