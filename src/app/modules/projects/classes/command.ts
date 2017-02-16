enum StateCommand {
  Running,
  Stop
}

export class Command {
  state = StateCommand.Stop;
  constructor(
    public name: string,
    public command: string
  ) { }

}