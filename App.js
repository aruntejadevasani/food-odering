const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { id: 'heading' }, 'Hello World!'),
		React.createElement('h2', { id: 'heading2' }, 'Hello World!'),
	]),
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { id: 'heading' }, 'Hello World!'),
		React.createElement('h2', { id: 'heading2' }, 'Hello World!'),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
