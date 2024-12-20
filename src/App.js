import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Card 1" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card 
            title="Card 2" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card 
            title="Card 3" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;