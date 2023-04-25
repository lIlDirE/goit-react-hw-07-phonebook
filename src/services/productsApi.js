const BASE_URL = 'https://6443cb85466f7c2b4b5a745a.mockapi.io';

export const fetchAllContacts = async () => {
	const response = await fetch.get(`${BASE_URL}/contacts`);
	await response.json()
}

export const addContact = async (data) => {
	const res = await fetch.get(`${BASE_URL}/contacts/`, {
		body: JSON.stringify(data),
	});
	return await res.json();
}

export const deleteContact = async (id) => {
	const response = await fetch.get(`${BASE_URL}/contacts/${id}`);
	return await response.json();
}