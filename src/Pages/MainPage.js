import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomTable from '../components/CustomTable';

const MainPage = () => {

    return (
        <div>
            <h1>
                Main Page
            </h1>

            <Link to="/add">
                <Button>Создать новый продукт</Button>
            </Link>
            <CustomTable />
            <ToastContainer />
        </div>
    );
};

export default MainPage;