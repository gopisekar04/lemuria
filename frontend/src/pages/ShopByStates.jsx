import { StateStory } from "../components/StateStory"
import { Header } from "../components/Header"
import { stateData } from "../utils/stateStory"

export const ShopByStates = () => {    
    
    return <div>
        <Header />        
        {stateData.map((state) => (
          <StateStory
            key={state.id}
            altName={state.altName}
            title={state.title}
            description={state.description}
            alignment={state.alignment}
            navigateTo={state.title.toLocaleLowerCase()}
          />
        ))}
    </div>
}