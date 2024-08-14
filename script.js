// script.js

function login(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulación de autenticación basada en el rol
    if (role === 'operador') {
        const validOperators = {
            'Kevin Cervantes Hernandez': 'kev12',
            'Giovanni Bernal Padilla': 'gio12',
            'Carlos Nolasco Perez': 'Car12',
            'Juan Carlos Hidalgo Gonzalez': 'jua12'
        };

        const operatorData = {
            'Kevin Cervantes Hernandez': {
                name: 'Kevin Cervantes Hernandez',
                email: 'kevin@example.com',
                phone: '1234567890',
                trips: [
                    { viaje: 'Viaje 1', total: '$100', fecha: '2024-08-10', observaciones: 'Observación 1' },
                    { viaje: 'Viaje 2', total: '$200', fecha: '2024-08-11', observaciones: 'Observación 2' }
                ]
            },
            'Giovanni Bernal Padilla': {
                name: 'Giovanni Bernal Padilla',
                email: 'giovanni.bernal@example.com',
                phone: '555-5678',
                trips: [
                    { viaje: 'Viaje A', total: '$1500', fecha: '2024-08-02', observaciones: 'Observaciones A...' }
                ]
            },
            'Carlos Nolasco Perez': {
                name: 'Carlos Nolasco Perez',
                email: 'carlos.nolasco@example.com',
                phone: '555-9101',
                trips: [
                    { viaje: 'Viaje X', total: '$2000', fecha: '2024-08-03', observaciones: 'Observaciones X...' }
                ]
            },
            'Juan Carlos Hidalgo Gonzalez': {
                name: 'Juan Carlos Hidalgo Gonzalez',
                email: 'juan.carlos@example.com',
                phone: '555-1122',
                trips: [
                    { viaje: 'Viaje Y', total: '$1200', fecha: '2024-08-04', observaciones: 'Observaciones Y...' }
                ]
            }
        };

        if (validOperators[username] === password) {
            // Guardar el nombre de usuario del operador en localStorage
            localStorage.setItem('loggedInOperator', username);
            // Guardar la información completa del operador en localStorage
            localStorage.setItem('operatorData', JSON.stringify(operatorData[username]));
            // Redirigir a la página de detalles del operador
            window.location.href = 'operador_detalle.html';
            return;
        }
    } else if (role === 'empleado') {
        const validEmployees = {
            'Nancy Padilla': 'np12',
            'Daniela De Jesus': 'dan12',
            'Jorge Flores': 'jor12'
        };

        if (validEmployees[username] === password) {
            window.location.href = 'dashboard_liquidacion.html';
            return;
        }
    }
    alert('Usuario o contraseña incorrectos');
}
