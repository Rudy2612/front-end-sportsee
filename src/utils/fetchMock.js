

import user_file from "../mock/user.json"
import activity_file from "../mock/user_activity.json"
import average_session_file from "../mock/user_average_session.json"
import performance_file from "../mock/user_performance.json"

export async function getUser(id) {
    try {
        let data = user_file.find(user => Number(user.id) === Number(id));

        if (data.length === 0)
            throw new Error("Aucune donnée trouvée");

        return data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getActivity(id) {
    try {
        let data = activity_file.find(user => Number(user.userId) === Number(id));

        if (data.length === 0)
            throw new Error("Aucune donnée trouvée");

        return data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getAverageSessions(id) {
    try {
        let data = average_session_file.find(user => Number(user.userId) === Number(id));

        if (data.length === 0)
            throw new Error("Aucune donnée trouvée");

        return data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}


export async function getPerformance(id) {
    try {
        let data = performance_file.find(user => Number(user.userId) === Number(id));

        if (data.length === 0)
            throw new Error("Aucune donnée trouvée");

        return data;
    } catch (error) {
        console.error('Fetch erreur : ', error);
        return null;
    }
}