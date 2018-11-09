import React, { PureComponent } from 'react';
import TerminalCommand from './command';

class CopyVideos extends PureComponent {
  constructor(props) {
    super(props);
    this.name = "Copy Videos";
    this.description = "Copy videos from your eon to your computer before they are uploaded.";
    this.requireSu = true;
    this.commands = [
	  "mkdir -p /data/videos/",
      "find /data/media/0/realdata/ -name '*.hevc' -exec cp {} /data/videos/ \\;"
	];
  }

  render() { return(
    <TerminalCommand 
      name={this.name} 
      description={this.description} 
      requireSu={this.requireSu}
      commands={this.commands}
      {...this.props} />);
  }
}

export default CopyVideos;