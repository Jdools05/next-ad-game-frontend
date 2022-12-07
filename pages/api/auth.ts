import type {NextRequest} from 'next/server'

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
    try {
        const response = await fetch('http://localhost:8080/j_security_check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            },
            body: `j_username=admin&j_password=admin`,
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
   return {};
}
