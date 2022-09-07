export function Body(props) {


    const showPara = () => {
        // if( props.fname === 'kamal'){
        //     return <p>{props.fname}</p>
        // }

        switch(props.fname) {
            case 'kamal' : return <p>{props.fname}</p>
        }
    }


    const validateEmail = () => {
        if(props.fname.includes('@') ){
            alert('Success');
        } else {
            alert('Please Provide Correct Email');
            return
        }

    }


    return (
        <div>World
            <input type='text' value={props.fname} onChange={(e) => props.updateFname(e.target.value)} />
            <input type='button' value={"Submit"} onClick={validateEmail} />
                    {showPara()}
        </div>
    )
}