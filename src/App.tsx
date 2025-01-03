import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Costas } from "./components/costas"

function App() {


  return (
    <>

    <div className="w-full p-4">
      <h3 className="text-2xl">Treinos</h3>

      <Tabs defaultValue="account" className="w-[400px] mt-10">
      <TabsList>
        <TabsTrigger value="costas">Costas</TabsTrigger>
        <TabsTrigger value="peitoral">Peitoral</TabsTrigger>
      </TabsList>
      <TabsContent value="costas" className="flex flex-col items-start">
        <Costas />
      </TabsContent>
      <TabsContent value="peitoral">Treino de peitoral</TabsContent>
    </Tabs>
    </div>

  


    </>
  )
}

export default App
