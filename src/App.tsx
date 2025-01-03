import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Costas } from "./components/costas";

function App() {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <h3 className="text-2xl font-bold text-center mb-4">Treinos</h3>

      <Tabs defaultValue="costas" className="w-full max-w-[600px] mx-auto mt-10">
        <TabsList
          className="flex justify-center gap-4 bg-white shadow-md sticky top-0 z-10"
        >
          <TabsTrigger value="costas" className="text-sm md:text-base">
            Costas
          </TabsTrigger>


          <TabsTrigger value="peitoral" className="text-sm md:text-base">
            Peitoral
          </TabsTrigger>

          <TabsTrigger value="pernas" className="text-sm md:text-base">
            Pernas
          </TabsTrigger>
        </TabsList>


        

        <TabsContent value="costas" className="mt-6">
          <Costas />
        </TabsContent>

        <TabsContent value="peitoral" className="mt-6 text-center">
          <p>Treino de Peitoral</p>
        </TabsContent>

        <TabsContent value="pernas" className="mt-6 text-center">
          <p>Treino de Pernas</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
