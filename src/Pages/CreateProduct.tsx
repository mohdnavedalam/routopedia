import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const navigateBack = useNavigate();
    return (
        <>
            <div>Create Product</div>
            <br />
            <div>
                <button onClick={()=>{navigateBack(-1)}}>Go Back</button>
            </div>
        </>
    );
};

export default CreateProduct;