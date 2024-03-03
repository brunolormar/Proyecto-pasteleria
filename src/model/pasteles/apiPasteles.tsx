import { IPastel } from 'src/app/interfaces/IPasteles';

const apiBD = 'http://localhost:3001/api';
const apiPasteles = {

    listar: async (): Promise<IPastel[]> => {
        const ruta = `${apiBD}/pasteles`;
        const pasteles = await fetch(`${ruta}`, { cache: 'no-store' }) 
            .then((res) => res.json())
        return pasteles
    },

    detalle: async (id: IPastel["Pastelid"]): Promise<IPastel> => {
        const ruta = `${apiBD}/pasteles/${id}`;
        const pastel = await fetch(`${ruta}`, { cache: 'no-store' }) 
            .then((res) => res.json())
        return pastel
    }

}

export default apiPasteles;
