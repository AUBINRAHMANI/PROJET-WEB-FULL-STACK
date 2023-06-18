import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

export const httpOptionsBase = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

let serverUrl = environment.apiUrl;

// Fonction pour vérifier si l'URL de l'API est valide et renvoie 'OK'
function checkApiUrl(url: string): Promise<boolean> {
  return fetch(`${url}/status`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(content => {
      return content === 'OK';
    })
    .catch(() => {
      return false;
    });
}

// Vérifiez si l'URL de l'API est valide
checkApiUrl(serverUrl).then(isValid => {
  if (isValid) {
    console.log('API URL is valid');
  } else {
    console.error('API URL is invalid. Falling back to the default URL.');
    serverUrl = 'http://backend:9428/api'; // URL de repli
  }
});

export { serverUrl };
