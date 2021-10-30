//
//  ZorkaNative.m
//  Zorka
//
//  Created by Vasil' on 30.10.21.
//

#import <React/RCTLog.h>
#import <React/RCTConvert.h>

#import "ZorkaNative.h"

@implementation ZorkaNative

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    [ZorkaNative getDeviceInformation];
    
    NSString *bundleId = [ZorkaNative bundleID];
    
    NSString *groupContainerURL = [ZorkaNative getAppGroupContainerPath];

    return @{
        @"bundleId": bundleId,
        @"groupContainerURL": groupContainerURL,
    };
}

+ (NSString *)bundleID {
    return [[[NSBundle mainBundle] infoDictionary] objectForKey: @"CFBundleIdentifier"];
}

+ (NSString *)getAppGroup {
    NSString *bundleId = [[[NSBundle mainBundle] infoDictionary] objectForKey: @"CFBundleIdentifier"];
    NSString *appGroupName = [NSString stringWithFormat:@"group.%@", bundleId];

    return appGroupName;
}

+ (NSString *)getAppGroupContainerPath {
    return [ZorkaNative getAppGroupContainerPathWithGroupName:[ZorkaNative getAppGroup]];
}

+ (void)getDeviceInformation {
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];

    NSString *bundleId = [ZorkaNative bundleID];
    NSString* version = [infoDictionary valueForKey:@"CFBundleVersion"];
    NSString* buildVersion = [infoDictionary valueForKey:@"DTPlatformVersion"];
    NSString* platformVersion = [infoDictionary valueForKey:@"CFBundleShortVersionString"];
}

+ (NSString *)getAppGroupContainerPathWithGroupName:(NSString*) appGroupName {
    NSString* realmPathPrefix = @"file://";
    NSFileManager *fm = [NSFileManager defaultManager];
    
    NSURL *groupContainerURL = [fm containerURLForSecurityApplicationGroupIdentifier:appGroupName];
    
    NSError* error = nil;
    if (![fm createDirectoryAtURL:groupContainerURL withIntermediateDirectories:YES attributes:nil error:&error]) {
        NSLog(@"error");
    }
    
    return [[groupContainerURL absoluteString]
            stringByReplacingOccurrencesOfString: realmPathPrefix
            withString: @""];
}

+ (void)dropGroupContainer {
    NSString *groupContainerPath = [ZorkaNative getAppGroupContainerPath];
    NSFileManager *fm = [NSFileManager defaultManager];
        
    for (NSString *item in [fm contentsOfDirectoryAtPath:groupContainerPath error:nil]) {
        NSError *error = nil;
        BOOL success = [fm removeItemAtPath:[NSString stringWithFormat:@"%@%@", groupContainerPath, item] error:&error];
        if (error) {
            NSLog(@"ERROR: Could not remove item %@ at app group container", item);
            NSLog(@"%@", error.localizedDescription);
        }
    }
}

@end
