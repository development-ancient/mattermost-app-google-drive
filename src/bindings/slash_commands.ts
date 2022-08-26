import { 
   AppBindingLocations, 
   Commands, 
   CommandTrigger, 
   GoogleDriveIcon 
} from "../constant";
import { 
   AppActingUser, 
   AppBinding, 
   AppCallRequest, 
   AppsState, 
   Oauth2App
} from "../types";
import { existsOauth2AppConfig, isConnected, isUserSystemAdmin } from "../utils/utils";
import { 
   getConfigureBinding, 
   getConnectBinding, 
   getDisconnectBinding, 
   getHelpBinding,
   getNotificationBinding
 } from "./bindings";

const newCommandBindings = (bindings: AppBinding[], commands: string[]): AppsState => {
   return {
      location: AppBindingLocations.COMMAND,
      bindings: [
         {
            icon: GoogleDriveIcon,
            label: CommandTrigger,
            hint: `[${commands.join(' | ')}]`,
            description: 'Manage Google Drive',
            bindings,
         },
      ],
   };
};

export const getCommandBindings = async (call: AppCallRequest): Promise<AppsState> => {
   const actingUser: AppActingUser | undefined = call.context.acting_user;
   const oauth2App: Oauth2App = call.context.oauth2 as Oauth2App;

   const bindings: AppBinding[] = [ getHelpBinding() ];
   const commands: string[] = [ Commands.HELP ];

   if (isUserSystemAdmin(<AppActingUser>actingUser)) {
      bindings.push(getConfigureBinding());
      commands.push(Commands.CONFIGURE)
   }

   if (await existsOauth2AppConfig(oauth2App)) { 
      if (isConnected(oauth2App)) {
         commands.push(Commands.NOTIFICATION);
         bindings.push(getNotificationBinding());
      }

      commands.push(Commands.CONNECT);
      bindings.push(getConnectBinding());
      commands.push(Commands.DISCONNECT);
      bindings.push(getDisconnectBinding());
   }
   
   
   return newCommandBindings(bindings, commands);
};