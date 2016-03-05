#import "RCTBridge.h"
#import "PanoPlayerViewController.h"
#import "RCTVideo360Manager.h"

@implementation RCTVideo360Manager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[PanoPlayerViewController alloc] init].view;
}


@end
