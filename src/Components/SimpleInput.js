    import {useEffect, useRef, useState} from "react";

    const SimpleInput = (props) => {
        const nameInputRef = useRef();
        const [enteredName, setEnterdName] = useState('');
        const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
        const [enteredNameTouched ,setEnterdNameTouched] = useState(false);


        useEffect(() => {
            if(enteredNameIsValid) {
                 console.log('name is in valid');
            }
        } , [enteredNameIsValid])

        const nameInputChangeHandler = event => {
            setEnterdName(event.target.value);
        };

        const formSubmissionHandler = event => {
            event.preventDefault();

            setEnterdNameTouched(true)

            if(enteredName.trim() === '') {
                setEnteredNameIsValid(false)
                return;
            }

            console.log(enteredName);

            const enteredValue = nameInputRef.current.value;
            console.log(enteredValue)
            setEnterdName('');
      };

      const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

      const nameInputClasses =  nameInputIsValid
      ? 'form-control invalid' : 'form-control invalid';

        return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInputRef} 
            type='text' 
            id='name' 
            onChange={nameInputChangeHandler}
            Value = {enteredName}
            />
            { nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
            </div>

            <div className="form-actions">
            <button>Submit</button>
            </div>
        </form>
        );
    };
    
    export default SimpleInput;