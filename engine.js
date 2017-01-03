var Engine = {

	TimeThen: new Date().getTime(),
	TimeNow: new Date().getTime(),
	Tick_Number: 0,
	IdleSpeed: 100,


  IdleTimer: function() {
		Engine.TimeNow = new Date().getTime();
		
		var timeDifference = Engine.TimeNow - Engine.TimeThen;
		
		while (timeDifference >= Engine.IdleSpeed) {
      timeDifference -= Engine.IdleSpeed;
			
			Engine.TimeThen = Engine.TimeNow;
			Engine.Tick_Number += 1;
    }
		
		setTimeout(Engine.IdleTimer, (Engine.IdleSpeed - timeDifference));
		
	},
};

window.onload = function() {
	Engine.Init();
};
