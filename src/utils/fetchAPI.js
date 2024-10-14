let base = "http://localhost:3000"

export async function getUser(id) {
    try {
        const response = await fetch(`${base}/user/${id}`);

        if (!response.ok)
            throw new Error(response.status);

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getActivity(id) {
    try {
        const response = await fetch(`${base}/user/${id}/activity`);

        if (!response.ok)
            throw new Error(response.status);

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getAverageSessions(id) {
    try {
        const response = await fetch(`${base}/user/${id}/average-sessions`);

        if (!response.ok)
            throw new Error(response.status);

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getPerformance(id) {
    try {
        const response = await fetch(`${base}/user/${id}/performance`);

        if (!response.ok)
            throw new Error(response.status);

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}