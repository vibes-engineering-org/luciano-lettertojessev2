"use client";

import { Card } from "~/components/ui/card";

export default function ReadOnlyApp() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-semibold text-foreground">
          Based House
        </h1>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          A read-only mini app showcasing community information and updates
        </p>
      </div>

      {/* Info Cards */}
      <div className="space-y-4">
        <Card className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">Community Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Members</span>
                <div className="font-medium">1,247</div>
              </div>
              <div>
                <span className="text-muted-foreground">Active Today</span>
                <div className="font-medium">89</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">Latest Updates</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">New feature release</div>
                  <div className="text-muted-foreground">Enhanced user experience with mobile improvements</div>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">2h ago</div>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">Community milestone</div>
                  <div className="text-muted-foreground">Reached 1,000+ active members</div>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">1d ago</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">Quick Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version</span>
                <span className="font-medium">v2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="font-medium">Today</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">
          Updates automatically • Read-only mode
        </p>
      </div>
    </div>
  );
}