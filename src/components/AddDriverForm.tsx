import React, { useState } from 'react';

interface AddDriverFormProps {
    onAddDriver: (name: string) => void;
}

const AddDriverForm: React.FC<AddDriverFormProps> = ( {onAddDriver} ) => {
    const [newDriverName, setNewDriverName] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(newDriverName.trim() != '') {
            onAddDriver(newDriverName);
            setNewDriverName('');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type='text'
            value={newDriverName}
            onChange={(e) => setNewDriverName(e.target.value)}
            placeholder='Enter driver name'/>
            <button type="submit">Add Driver</button>
        </form>
    );
};

export default AddDriverForm;