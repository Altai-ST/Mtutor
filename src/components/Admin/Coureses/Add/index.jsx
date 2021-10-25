import { Button } from "react-bootstrap"

export const Add = ({onClose}) => {


    const handleSubmit=()=>{
        onClose(false)
    }

	return (
        <div className='container'>
			<div className='card'>
				<div className='card-header'>Добавление нового курса</div>
				<div className='card-body'>
					<div className='row1'>
						<label className='add-label'>Наименование курса</label>
						<input className='-add-input' type='text' />
					</div>
					<div className='row2'>
                    <Button variant="success" onClick={handleSubmit}>Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}

