import { PlayerStates, PlayerAnimations } from "../PlayerController";
import PlayerState from "./PlayerState";
import Input from "../../../Wolfie2D/Input/Input";
import { MBControls } from "../../MBControls";

export default class Dying extends PlayerState {
    

    public onEnter(): void {
        

        this.owner.animation.play(PlayerAnimations.DYING);
        
        
    }

    public update(deltaT: number): void {
        if (this.owner.animation.isPlaying(PlayerAnimations.DYING)){
            this.finished(PlayerStates.DEAD);
        }
        
        
    }

    

    public onExit(): Record<string, any> {
        this.owner.animation.stop();
        return {};
    }
}