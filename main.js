/*----------------------------------------------------------------------------------------
Dentro de este archivo vamos a trabajar con la API de https://api.preciodelaluz.org/
En esta API se definen dos zonas, PCB(Peninsula, Canarias y Baleares) Y CYM(Ceuta y Melilla)
La API proporciona las siguientes operaciones(intercambiamos de zone = "?", por la zona):
1-Obtiene la serie de precios completa(GET /v1/prices/all?zone=?)
2-Obtiene el precio medio de la serie(GET /v1/prices/avg?zone=?)
3-Obtiene el precio más alto de la serie(GET /v1/prices/max?zone=?)
4-Obtiene el precio más bajo de la serie(GET /v1/prices/min?zone=?)
5-Obtiene el precio en el momento de la consulta(GET /v1/prices/now?zone=?)
//Este último es necesario un especificar un decimal menor de 25
6-Obtiene los n precios más económicos de la serie(GET /v1/prices/cheapests?zone=?&n=?)
-----------------------------------------------------------------------------------------*/

//1-Obtiene la serie de precios completa
async function getPreciosTodos(zona) {
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/all';
    const zone = zona;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}`)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//2-Obtiene el precio medio de la serie
async function getPrecioMedio(zona) {
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/avg';
    const zone = zona;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}`)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//3-Obtiene el precio más alto de la serie
async function getPrecioMax(zona) {
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/max';
    const zone = zona;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}`)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//4-Obtiene el precio más bajo de la serie
async function getPrecioMin(zona) {
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/min';
    const zone = zona;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}`)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//5-Obtiene el precio en el momento de la consulta
async function getPrecioAhora(zona) {
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/now';
    const zone = zona;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}`)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//6-Obtiene los n precios más económicos de la serie
async function getPreciosBajos(zona, numero) {
    
    const apiEndpoint = 'https://api.preciodelaluz.org/v1/prices/cheapests';
    const zone = zona;
    const number = numero;
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}${encodeURIComponent(`${apiEndpoint}?zone=${zone}&n=${number}`)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents); // Parse the JSON string contained in 'contents'
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getPreciosBajos('PCB', 2);