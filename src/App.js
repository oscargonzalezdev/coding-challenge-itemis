import ChallengeSolutions from "./components/ChallengeSolutions";
import ReceiptCalculator from "./components/ReceiptCalculator";
import { Link, Divider, Text } from '@chakra-ui/react'

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div>Coding Challenge</div>
        <ul className="flex-row">
          <li><Link href='/#'>Receipt</Link></li>
          <li><Link href='/#solutions'>Solutions</Link></li>
        </ul>
      </nav>
      <ReceiptCalculator />
      <Divider my='10' />
      <ChallengeSolutions />
      <Divider />
      <Text fontSize='0.9rem' p='10' align='center'>Made with 🤍 by
        <a href="http://oscargonzalez.dev" target="_blank" rel="noopener noreferrer"> Oscar Gonzalez</a>
      </Text>
    </div>
  )
}

export default App;
