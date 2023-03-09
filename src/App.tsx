import styled from "styled-components";
import Main from "./pages/main";

const Container = styled.div`
	background-color: #f1f4f9;
	width: 100vw;
	height: 100vh;
`;

const App = () => {
	return (
		<Container>
			<Main />
		</Container>
	);
};

export default App;
