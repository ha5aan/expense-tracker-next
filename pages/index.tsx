import { Box, Flex,Text,Input, Stack, InputGroup, InputLeftAddon,
  Radio, RadioGroup,Button, Alert, AlertDescription, AlertIcon, AlertTitle,useToast} from '@chakra-ui/react'
  import { useState } from 'react'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export default function Home() {
  type transactionData ={
    amount:number,
    income: boolean,
details:string
  }
  const toast = useToast()

  const [transactiondetails, setTransactiondetails] = useState<[transactionData]>([]);
  const [total,setTotal]=useState<number>(0);
const changehandler =(e)=>{
  e.preventDefault()
  let currentTransaction = transactiondetails
 
  let amount = parseInt(e.target.amount.value)
  let income=e.target.income.value
let description =e.target.description.value 
if( isNaN(amount)){

}else{
if(total<amount && income==0 ){
  //alert ("transaction failed")
  return( toast({
    title: 'Transaction Failed.',
    description: "Exprense cannot be greater than income.",
    status: 'error',
    duration: 9000,
    isClosable: true,
  }))
}else if(income==1){
  let currenttotal:number = total
currentTransaction.push({
  amount:amount,
  details: description,
  income:true
})
  setTotal(currenttotal+ amount)
  setTransactiondetails(currentTransaction)
  // transactiondetails.forEach(element => {
  //   console.log(element)
  // });
}else{
  let currenttotal:number = total
  currentTransaction.push({
    amount:amount,
    details: description,
    income:false
  })
  setTotal(currenttotal- amount)
  setTransactiondetails(currentTransaction)

}
}
  

}

  return (
    <>
      <Head>
        <title>Expense Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mt={"10"} mx={["5%","5%","10%","30%"]} p={["5","3","7","9"]} border='1px' borderColor='gray.200'>
  
        <Flex  direction="column">
        <Box>
          <Text color="#9E9C9C" fontSize="md">Good Morning!</Text>
          <Text ml={"5"} fontSize="lg">Muhammad Hasaan</Text>
        </Box>

        <Box className={styles.card} width={["280px","400px","450px"]} m={"1"} border="1px">
         <Text fontSize={'3xl'}>$ {total}</Text>
         <div className={styles.outerCircle }>
          <div className={styles.innercircle}>

          </div>
         </div>
<Text>
  Balance
</Text>

<hr/>
<Box mt={10}/>
<div className={styles.cardDetails} >
<Flex m={2}   justify="space-between">

<Box >
  <Text fontSize={'2xl'}>
    **** **** **** 1234
  </Text>
</Box>
<Box><Text fontSize={'1xl'}> LOGO </Text></Box>

</Flex>
</div>
<div className={styles.circle}/>
        </Box>

        <Box p={5} m={2} border='1px' borderRadius={"20px"} borderColor='gray.200'>
          <form onSubmit={changehandler} >
        <Text mb={2} textAlign={'center'} fontSize={"xl"}> Add New Transaction</Text>
        <Stack  spacing={4}>
        {/* <Input placeholder='Enter Amount' type={"number"} size='md' /> */}
        <RadioGroup name='income' defaultValue='1'>
  <Stack spacing={5} direction='row' >
    <Radio colorScheme='green' checked value='1'>
      Income
    </Radio>
    <Radio colorScheme='red' value='0'>
      Expense
    </Radio>
  </Stack>
</RadioGroup>
        <InputGroup>
    <InputLeftAddon children="Amount" />
    <Input type='number'name='amount' required placeholder='Amount' />
  </InputGroup>
       
        {/* <Input placeholder='Enter Description' type={"number"} size='md' /> */}

        <InputGroup>
    <InputLeftAddon children="Decription" />
    <Input type='text' required name='description' placeholder='Description' />
  </InputGroup>
        </Stack>
        <Box mt={3} textAlign={'center'}>
        <Button textAlign={'center'} type={"submit"} justifySelf={'center'} colorScheme='blue'>Add Transaction</Button>
        </Box>
        </form>
        </Box>

        <Box>
        <Text fontSize={'1xl'} fontWeight={"bold"} textDecoration={"ThreeDFace"}> All Transactions</Text>
        <Accordion allowToggle>
       
       {transactiondetails.map((element,index)=>{
return(<AccordionItem key={index}>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
        {index} : Anount = {element.amount}
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    {element.details} <br/>
    Type  {(element.income) ?  "Income" : "Expense"}
  </AccordionPanel>
</AccordionItem>)
       })}
  


</Accordion>


        </Box>
        
        </Flex>
       
        </Box>
        
    </>
  )
}
