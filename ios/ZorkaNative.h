//
//  ZorkaNative.h
//  Zorka
//
//  Created by Vasil' on 30.10.21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface ZorkaNative : NSObject  <RCTBridgeModule>
+ (void)dropGroupContainer;
+ (NSString *)bundleID;
+ (NSString *)getAppGroup;
+ (NSString *)getAppGroupContainerPath;
+ (NSString *)getAppGroupContainerPathWithGroupName:(NSString*) appGroupName;
@end

