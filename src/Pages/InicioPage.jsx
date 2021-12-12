import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Outlet, useNavigate } from 'react-router-dom';

const InicioPage = () => {

    const navegar = useNavigate();

    const items = [
        {
            label: 'PrimeReact',
            icon: 'pi pi-fw pi-prime',
            command: () => { navegar('/primetable') }
        },
        {
            label: 'React-Bootstrap',
            icon: 'pi pi-fw pi-box',
            command: () => { navegar('/bootstraptable') }
        },
        {
            label: 'MaterialTable',
            icon: 'pi pi-fw pi-table',
            command: () => { navegar('/materialtable') }
        },
        {
            label: 'Ag-grid',
            icon: 'pi pi-fw pi-star',
            command: () => { navegar('/aggrid') }
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
            <Outlet />
        </div>
    )
}

export default InicioPage
