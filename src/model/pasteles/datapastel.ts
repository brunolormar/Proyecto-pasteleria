export async function getPasteles() {

    try{
      const res = await fetch('http://localhost:3001/api/pasteles', { cache: 'no-store'})
      return res.json()
    }catch(error){
      throw new Error('Failed to fetch data')
    }
  }
  